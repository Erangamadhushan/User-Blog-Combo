import { formatDistanceToNow } from "date-fns";

export const TimeCalculation = ({ createdAt }: { createdAt: string }) => {

  return formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
  });
}
