export type CommandContext = { wallet: string };

export type SourceMetadata = {
  logo: string;
};

export type Field = {
  type: 'string' | 'int';
  name: string;
  description?: string;
};

export type Condition = {
  name: string;
  key: string;
  fields: Field[];
  method: (args: any, ctx: CommandContext) => Promise<boolean>;
};

export type Source = {
  id: string;
  metadata: SourceMetadata;
  conditions: Condition[];
};

export type UserData = {
  wallet: string;
  githubId?: string;
};
