import Link from "next/link";

import ActivityItem from "./activity-item";

import { service } from "@packages/services/dist/services/activity";

const Activities = async () => {
  const activities = await service.fetch("");

  return (
    <div>
      <Link href="/dashboard/activities/new">New</Link>
      {activities.map((activity) => (
        <ActivityItem activity={activity} />
      ))}
    </div>
  );
};

export default Activities;
