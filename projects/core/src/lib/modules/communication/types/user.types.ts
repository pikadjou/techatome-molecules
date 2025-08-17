// Temporary types to avoid circular dependency with @ta/user
// TODO: These should be moved to a shared types library

export interface User {
  id: string;
  name: string;
  email?: string;
  // Add other properties as needed
}

export interface Contact {
  id: string;
  name: string;
  email?: string;
  // Add other properties as needed
}