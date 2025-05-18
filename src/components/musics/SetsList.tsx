import { AvailableLfSets } from "@/components/musics/AvailableLfSets";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

const LfItem = ({
  setName,
  children,
  onClick,
}: {
  setName: AvailableLfSets;
  children: ReactNode;
  onClick: (setName: AvailableLfSets) => void;
}) => {
  return (
    <li>
      <button
        className="dark_aug_ui_text_container text-lg text-center my-2"
        onClick={() => {
          onClick(setName);
        }}
        data-augmented-ui
      >
        {children}
      </button>
    </li>
  );
};

type Props = {
  onOpenSet: (setName: AvailableLfSets) => void;
};

export default function SetsList({ onOpenSet }: Props) {
  const t = useTranslations("musics");

  return (
    <div className="text-center">
      <p>/././ {t("sets_lessfest")} \.\.\</p>
      <ul className="grid grid-cols-2 w-full text-center">
        <LfItem setName="lf8" onClick={onOpenSet}>
          lessfest 8
        </LfItem>
        <LfItem setName="lf7" onClick={onOpenSet}>
          lessfest 7
        </LfItem>
        <LfItem setName="lf6" onClick={onOpenSet}>
          lessfest 6
        </LfItem>
        <LfItem setName="lf5" onClick={onOpenSet}>
          lessfest 5
        </LfItem>
        <LfItem setName="lf4" onClick={onOpenSet}>
          lessfest 4
        </LfItem>
      </ul>
    </div>
  );
}
