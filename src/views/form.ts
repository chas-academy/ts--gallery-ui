import input from "../components/input";
import { type Painting } from "../libs/api";
import { setPainting } from "../libs/store";

export default function form() {
  const form = document.createElement("form");
  form.className = "grid grid-cols-2 gap-3 min-w-3xl";

  form.appendChild(
    input({ type: "text", name: "name", label: "Painting name" })
  );
  form.appendChild(
    input({ type: "text", name: "painterName", label: "Painter name" })
  );
  form.appendChild(
    input({
      type: "textarea",
      name: "description",
      label: "Painting description",
      classes: "row-span-2",
    })
  );
  form.appendChild(
    input({ type: "text", name: "imageUrl", label: "Image URL" })
  );

  form.innerHTML += `
        <button type="submit" class="rounded-md p-2 hover:opacity-70 cursor-pointer bg-fuchsia-700 text-white transition-all duration-150">Add painting</button>
    `;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const { name, description, imageUrl, painterName } =
      Object.fromEntries(formData);

    setPainting({
      name,
      description,
      imageUrl,
      painter: { name: painterName },
    } as Painting);
  });

  return form;
}
