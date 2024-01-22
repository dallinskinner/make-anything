export interface QuestionsProps {
  name: string;
  onSubmit: (emailContent: string) => void;
  isSubmitting: boolean;
}
