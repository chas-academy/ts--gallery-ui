export default function input({
  type,
  name,
  label,
  classes = "",
}: {
  type: string;
  name: string;
  label: string;
  classes?: string;
}) {
  const inputContainer = document.createElement("fieldset");
  inputContainer.className = `p-2 border border-fuchsia-800 rounded-md ${classes}`;

  inputContainer.innerHTML = `
    <legend class="text-sm font-medium text-fuchsia-900">${label}</legend>
    <input type="${type}" name="${name}" id="${name}" class="hover:opacity-70 cursor-pointer p-1 size-full bg-transparent">
  `;

  return inputContainer;
}
