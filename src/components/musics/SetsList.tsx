import { useTranslations } from "next-intl";

type Props = {
  onlf7Open: () => void;
  onlf6Open: () => void;
  onlf5Open: () => void;
  onlf4Open: () => void;
};

export default function SetsList({
  onlf7Open,
  onlf6Open,
  onlf5Open,
  onlf4Open,
}: Props) {
  const t = useTranslations("musics");

  return (
    <div className="text-center">
      <p>/././ {t("sets_lessfest")} \.\.\</p>
      <ul className="grid grid-cols-2 w-full text-center">
        <li>
          <button
            className="dark_aug_ui_text_container text-lg text-center my-2"
            onClick={() => onlf7Open()}
            data-augmented-ui
          >
            lessfest 7
          </button>
        </li>
        <li>
          <button
            className="dark_aug_ui_text_container text-lg text-center my-2"
            onClick={() => onlf6Open()}
            data-augmented-ui
          >
            lessfest 6
          </button>
        </li>
        <li>
          <button
            className="dark_aug_ui_text_container text-lg text-center my-2"
            onClick={() => onlf5Open()}
            data-augmented-ui
          >
            lessfest 5
          </button>
        </li>
        <li>
          <button
            className="dark_aug_ui_text_container text-lg text-center my-2"
            onClick={() => onlf4Open()}
            data-augmented-ui
          >
            lessfest 4
          </button>
        </li>
      </ul>
    </div>
  );
}
