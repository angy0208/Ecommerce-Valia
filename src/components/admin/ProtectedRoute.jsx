import { Navigate } from "react-router-dom";
import { useEffect } from "react";

function getTokenExpiration(token) {
  try {
    const payload = JSON.parse(
      atob(
        token
          .split(".")[1]
          .replace(/-/g, "+")
          .replace(/_/g, "/")
      )
    );

    if (!payload.exp) {
      return null;
    }

    return payload.exp * 1000;
  } catch {
    return null;
  }
}

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("adminToken");

  const expiration = token
    ? getTokenExpiration(token)
    : null;

  useEffect(() => {
    if (!token || !expiration) {
      return;
    }

    const timeUntilExpiration =
      expiration - Date.now();

    if (timeUntilExpiration <= 0) {
      localStorage.removeItem("adminToken");
      window.location.href = "/admin-login";
      return;
    }

    const timer = setTimeout(() => {
      localStorage.removeItem("adminToken");
      window.location.href = "/admin-login";
    }, timeUntilExpiration);

    return () => {
      clearTimeout(timer);
    };
  }, [token, expiration]);

  if (!token) {
    return (
      <Navigate
        to="/admin-login"
        replace
      />
    );
  }

  if (!expiration) {
    localStorage.removeItem("adminToken");

    return (
      <Navigate
        to="/admin-login"
        replace
      />
    );
  }

  return children;
}

export default ProtectedRoute;