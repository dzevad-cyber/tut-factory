import {
  type UseFormSetError,
  type FieldValues,
  type FieldPath,
} from 'react-hook-form';

export const setFormErrors = <T extends FieldValues>(
  errors: Record<string, any>,
  cb: UseFormSetError<T>
) => {
  Object.entries(errors).map(([key, value]) =>
    cb(key as FieldPath<T>, { message: value })
  );
};
