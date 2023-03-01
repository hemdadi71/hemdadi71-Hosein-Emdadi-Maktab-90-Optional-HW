const El = ({ element, child, ...rest }) => {
  const el = document.createElement(element);
  for (const key in rest) {
    el[key] = rest[key];
  }
  if (Array.isArray(child)) {
    el.append(...child);
    // child.forEach(item => el.append(item));
  } else {
    el.append(child);
  }
  return el;
};
export default El;
