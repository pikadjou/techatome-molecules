export interface Picture {
    id: number;
    url: string;
    thumbnailUrl?: string;
    isOwner: boolean;
    createdDate: string | null;
}
