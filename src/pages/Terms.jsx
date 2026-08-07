import TermsHeader from "../components/terms/TermsHeader";
import TermsSidebar from "../components/terms/TermsSidebar";
import TermsContent from "../components/terms/TermsContent";

function Terms() {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-6 pt-28 pb-16">
      <TermsHeader />
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        <TermsSidebar />
        <TermsContent />
      </div>
    </main>
  );
}

export default Terms;