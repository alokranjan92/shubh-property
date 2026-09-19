export const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE?.trim() || "+916398581600";

export const businessPhoneDisplay =
  process.env.NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY?.trim() || "+91 63985 81600";

export const whatsappNumber = businessPhone.replace(/\D/g, "");
