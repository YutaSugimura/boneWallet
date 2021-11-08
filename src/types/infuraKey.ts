export type InfuraKeyData = {
  projectId: string;
  projectSecret: string;
};

export type InfuraKeyFormData = InfuraKeyData;

export type InfuraKeyState =
  | {
      isLoading: true;
    }
  | {
      isLoading: false;
      projectId: string;
      projectSecret: string;
    }
  | {
      isLoading: false;
      isLocalStorage: true;
      projectId: string;
      projectSecret: string;
    };
