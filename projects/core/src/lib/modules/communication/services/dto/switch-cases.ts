export type SwitchCasesBase = {
  UserId: string;
};

export type SwitchCasesTaskMerged = SwitchCasesBase & {
  Type: 'TaskMerged';
  SourceReference?: string;
  SourceTitle?: string;
  DestinationReference: string;
  DestinationTitle: string;
};
export type SwitchCasesTaskStatusChanged = SwitchCasesBase & {
  Type: 'TaskStatusChanged';
  OldStatus?: string;
  NewStatus?: string;
};
export type SwitchCasesTypeChanged = SwitchCasesBase & {
  Type: 'TypeChanged';
  OldType?: string;
  NewType?: string;
};
export type SwitchCasesSubTypeChanged = SwitchCasesBase & {
  Type: 'SubTypeChanged';
  OldSubType?: string;
  NewSubType?: string;
};

export type SwitchCasesCriticityChanged = SwitchCasesBase & {
  Type: 'CriticityChanged';
  OldCriticity?: string;
  NewCriticity?: string;
};

export type SwitchCasesToDoAdded = SwitchCasesBase & {
  Type: 'ToDoAdded';
  Description?: string;
  AssigneeId: string;
};
export type SwitchCasesToDoClosed = SwitchCasesBase & {
  Type: 'ToDoClosed';
  Description?: string;
  AssigneeId: string;
};
export type SwitchCasesAssigneeChanged = SwitchCasesBase & {
  Type: 'AssigneeChanged';
  OldUserId: string;
  NewUserId: string;
};
export type SwitchCasesSubTaskCreated = SwitchCasesBase & {
  Type: 'SubTaskCreated';
  TaskId: string;
  TaskReference?: string;
  AssigneeId: string;
};
export type SwitchCasesTeamChanged = SwitchCasesBase & {
  Type: 'TeamChanged';
  OldTeamName?: string;
  NewTeamName?: string;
};

export type SwitchCases =
  | SwitchCasesTypeChanged
  | SwitchCasesSubTypeChanged
  | SwitchCasesToDoAdded
  | SwitchCasesToDoClosed
  | SwitchCasesAssigneeChanged
  | SwitchCasesSubTaskCreated
  | SwitchCasesCriticityChanged
  | SwitchCasesTaskStatusChanged
  | SwitchCasesTeamChanged;
