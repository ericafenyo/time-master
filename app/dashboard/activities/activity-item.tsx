import { Button } from "@/components/ui/button";
import { Activity } from "@/packages/network/dist/services/activity";
import { BadgeDollarSign, MoreVertical } from "lucide-react";

export type Properties = {
  activity: Activity;
};

const ActivityItem = ({ activity }: Properties) => {
  return (
    <div className="p-4 my-2 bg-white flex">
      <div className="flex-auto">
        <span>{activity.name}</span>
        <span>project</span>
        <span>{" > client"}</span>
      </div>

      <div className="flex-none ">
        <span className="inline-block">
          <BadgeDollarSign />
        </span>
        <span className="ml-3">17:38</span>
        <span className="ml-3">-:-</span>
        <span className="ml-3">High</span>
        <span className="ml-3">Done</span>
        <span className="inline-block ml-3">
          <Button size="icon" variant="ghost">
            <MoreVertical />
          </Button>
        </span>
      </div>
    </div>
  );
};

export default ActivityItem;
