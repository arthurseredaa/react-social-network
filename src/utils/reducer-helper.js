export const mapArrayAndChangeProperty = (
  items,
  propToChange,
  propFromAction,
  newPropsObj
) => {
  return items.map((user) =>
    user[propToChange] === propFromAction ? { ...user, ...newPropsObj } : user
  );
};
