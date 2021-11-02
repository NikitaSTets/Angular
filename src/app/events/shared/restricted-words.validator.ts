import { FormGroup } from "@angular/forms";

export function restrictedWords(words: string[]) {
    return (control: FormGroup): { [key: string]: any } => {
        if (!words) {
            return {};
        }

        var invalidWords = words.map(w => control.value.includes(w) ? w : null)
            .filter(w => w != null)

        return invalidWords && invalidWords.length > 0
            ? { 'restrictedWords': invalidWords.join(',') }
            : {}
    }
}