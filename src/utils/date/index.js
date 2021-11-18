import { format as _format } from "date-fns";
import { enGB as en, ru } from "date-fns/locale";
import i18n from "@/locale";

const DEFAULT_FORMAT = "dd.MM.yyyy";
const LOCALES = { en, ru };

function getOptions() {
  return {
    locale: LOCALES[i18n.locale],
  };
}

const format = function (date, format = DEFAULT_FORMAT) {
  if (typeof date !== "string") return console.error("date arg must be string");

  return _format(new Date(date), format, getOptions());
};

export { format };
