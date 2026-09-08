export const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE?.trim() || "+919900000001";

export const businessPhoneDisplay =
  process.env.NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY?.trim() || "+91 99000 00001";

export const whatsappNumber = businessPhone.replace(/\D/g, "");
