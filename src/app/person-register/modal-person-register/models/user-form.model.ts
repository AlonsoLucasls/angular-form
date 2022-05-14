import { ServicePlanModel } from './service-plan.model';
import { CoinModel } from './coin.model';
import { PlanModel } from './plan.model';
export interface UserModel {
  name: string;
  plan: PlanModel;
  price: number;
  coin: CoinModel;
  service: ServicePlanModel;
}
