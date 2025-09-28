
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import TopImages from "@/components/dashboard/TopImages";
import ContentGrid from "@/components/dashboard/ContentGrid";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <TopImages />
      <ContentGrid />
    </DashboardLayout>
  );
}
