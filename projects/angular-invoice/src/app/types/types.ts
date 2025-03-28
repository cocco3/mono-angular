export type DocType = 'invoice' | 'proposal';

export type FormProps = {
  docType: DocType;
  date: string;
  clientName: string;
  clientAddress: string;
  clientPhone: string;
  location: string;
  amount: string;
  body: string;
};
