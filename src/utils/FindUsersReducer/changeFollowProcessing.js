export const changeFollowProcessing = (
  isLoading,
  isFollowProcessing,
  userId
) => {
  return isLoading
    ? [...isFollowProcessing, userId]
    : [isFollowProcessing.filter((id) => id !== userId)];
};
