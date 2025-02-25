import type yup from "yup";
import { object, string, boolean } from "yup";

export const UsernameSchema = string()
  .required("Username is required")
  .max(24, "Username too long")
  .matches(/^\S*$/, "Username should not have space");

export const BioSchema = string()
  .optional()
  .max(350, "Limit bio to just 350 characters");

export const passwordSchema = string()
  .required("Enter your password")
  .min(8, "Password should be at least 8 characters long")
  .matches(/[0-9]/, "Password should contain at least one number")
  .matches(/[a-z]/, "Password should contain at least one lowercase letter")
  .matches(/[A-Z]/, "Password should contain at least one uppercase letter")
  .matches(
    /[!@#$%^&*(),.?":{}|<>]/,
    "Password should contain at least a special character"
  );

export const AudienceSchema = object({
  name: string().optional().min(3, "Name should be at least 3 characters long"),
  email: string().required("Email is required").email("Enter a valid email"),
  user_name: UsernameSchema,
  password: passwordSchema,
});

export const HostSchema = object({
  name: string().optional().min(3, "Name should be at least 3 characters long"),
  email: string().required("Email is required").email("Enter a valid email"),
  stage_name: string()
    .required("Stage name is required")
    .min(2, "Stage name should be at least 2 characters long"),
  agreement: boolean().required("Agree to continue"),
  profession: string().required("Profession is required"),
  password: passwordSchema,
});

export const ResetPasswordSchema = object({
  password: passwordSchema,
  password_confirmation: string().required("Confirm password"),
}).test("confirmation-test", "", (payload, context) => {
  const error = context.createError({
    path: "password_confirmation",
    message: "Password don't match",
  });
  return payload.password === payload.password_confirmation ? true : error;
});

export const ChangePasswordSchema = object({
  old_password: string().required("Old password required"),
  password: passwordSchema,
  password_confirmation: string().required("Confirm password"),
})
  .test("new-password-test", "", (payload, context) => {
    const error = context.createError({
      path: "password",
      message: "New password should not be same as old password",
    });
    return payload.old_password === payload.password ? error : true;
  })
  .test("confirmation-test", "", (payload, context) => {
    const error = context.createError({
      path: "password_confirmation",
      message: "Password don't match",
    });
    return payload.password === payload.password_confirmation ? true : error;
  });

export type Audience = yup.InferType<typeof AudienceSchema>;
export type Host = yup.InferType<typeof HostSchema>;
