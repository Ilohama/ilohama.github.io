import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

type Props = {
  defaultValue: string;
};

export default function LocaleSwitcher({ defaultValue }: Props) {
  return <LocaleSwitcherSelect defaultValue={defaultValue} />;
}
