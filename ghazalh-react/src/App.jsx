import ProfileHeader from "./components/ProfileHeader";
import StatCard from "./components/StatCard";
import InfoCard from "./components/InfoCard";

function App() {
  return (
    <div className="app">
      <ProfileHeader />

      <div className="stats">
        <StatCard title="XP" value="170" sub="Last active: Jan 6, 2026" />
        <StatCard title="STREAK" value="1 days" sub="Longest streak: 1 days" />
        <StatCard title="RECENT BADGES" value="Course Completer" sub="Nov 11, 2025" />
      </div>

      <div className="info-section">
        <InfoCard
          title="Personal Information"
          items={[
            ["Email", "ghazalehmohammadi6@gmail.com"],
            ["Gender", "Female"],
            ["Country", "Afghanistan"],
            ["Province", "Herat"],
            ["Date of Birth", "4/28/00"],
            ["Portfolio", "N/A"],
          ]}
        />

        <InfoCard
          title="Account Details"
          items={[
            ["Role", "Student"],
            ["Status", "Active"],
            ["Verification", "Verified"],
            ["Warnings", "No warnings"],
          ]}
        />
      </div>
    </div>
  );
}

export default App;
