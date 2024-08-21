import { FormProvider as Form } from 'react-hook-form';

export default function FormProvider({ children, methods, onSubmit }) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
