import { AxiosResponse } from "axios";
import { http } from "../../core/http";

/**
 * Activity is a core element used to track time for different tasks.
 */
export type Activity = {
  /**
   * Unique identifier for the activity
   */
  id: string;

  /**
   * Name of the activity (e.g.Cycling)
   */
  name: string;

  /**
   * Description or details about the activity
   */
  description: string;

  /**
   * Estimation of the activity duration in seconds
   */
  estimation: number;

  /**
   * Start time when the activity is initiated
   */
  startTime: Date;

  /**
   * End time when the activity is stopped or completed
   */
  endTime: Date;

  /**
   * Identifier of the project this activity belongs to
   */
  projectId: string;

  /**
   * Time when the activity was created
   */
  createdAt: Date;

  /**
   * Time when the activity was last updated
   */
  updatedAt: Date;
};

export type ActivityCreateRequest = {
  /**
   * Name of the activity (e.g.Cycling)
   */
  name: string;

  /**
   * Description or details about the activity
   */
  description: string;
};

export interface ActivityService {
  fetch(activityId: string): Promise<Activity[]>;
  create(request: ActivityCreateRequest): Promise<Activity>;
}

const fetch = async (activityId: string): Promise<Activity[]> => {
  const response: AxiosResponse<Activity[]> = await http.get("/activities");
  return response.data;
};

const create = async (request: ActivityCreateRequest): Promise<Activity> => {
  const response = await http.post("/activities", request);

  console.log(response.data);

  return {
    id: "6f43c39a-6da0-11ee-b962-0242ac120002",
    name: "Setup Initial Environment",
    description: "Set up the development environment for the project",
    estimation: 3600 * 120,
    startTime: new Date(),
    endTime: new Date(),
    projectId: "b654144c-6da0-11ee-b962-0242ac120002",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

export const service: ActivityService = { fetch, create };
