export const paymentMethodResource = (paymentMethod) => {
  return {
    id: paymentMethod.id,
    displayName: paymentMethod.displayName,
  };
};

export const paymentMethodCollection = (paymentMethods) => {
  return paymentMethods.map(paymentMethodResource);
};
