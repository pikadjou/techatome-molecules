export interface PersonBase<T> {
    id: number;
    naming: T | null;
    phoneNumber: string | null;
    email: string | null;
}
