import { User } from "./user";

export interface CommentEntity {
  id: number;
  user: User;
  text: string;
  createdDate: string;
  updatedDate: string | null;
  isImportant: boolean;
  isOwner: boolean;
}
