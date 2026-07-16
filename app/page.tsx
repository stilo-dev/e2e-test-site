import { Editable, EditableImage, EditableLink } from "@stilodev/react";

export default function HomePage() {
  return (
    <div>
      <Editable id="home/hero.title" as="h1" />
      <Editable id="home/hero.subtitle" richtext as="p" />
      <EditableLink id="home/hero.cta" />
      <EditableImage id="home/hero.image" />
    </div>
  );
}
