import { readJsonFile } from "../../infrastructure/adapters/json.adapter.js";
import {
  filterValidPlans,
  getUniquePlansWithPriority,
  sortPlansByPriorityAndDate,
} from "../../services/plan.service.js";

const filePath = "./data.json";

const planFilteredUseCase = () => {
  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() - 3);

  const data = readJsonFile(filePath);
  if (!data) {
    return;
  }

  const validPlans = filterValidPlans(data.plans, currentDate);
  const uniquePlans = getUniquePlansWithPriority(validPlans);
  sortPlansByPriorityAndDate(uniquePlans);

  return uniquePlans;
};

export { planFilteredUseCase };
