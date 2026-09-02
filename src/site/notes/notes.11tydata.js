require("dotenv").config();
const settings = require("../../helpers/constants");
const { pickNoteMetadata } = require("../../helpers/bases-engine/noteMetadata");
const pluginLoader = require("../../helpers/pluginLoader");

// Core note settings plus any per-note flags declared by enabled plugins
// (manifest "noteSettings"). Same resolution for both: per-note frontmatter
// wins, the env var of the same name is the global default.
const allSettings = [
  ...settings.ALL_NOTE_SETTINGS,
  ...pluginLoader.getNoteSettingKeys(),
];

// The PhD garden is meant to retain the two main spatial cues from Obsidian:
// the vault hierarchy on the left and the linked-note graph on the right.
// Individual notes can still override these defaults explicitly with false.
// These project defaults intentionally outrank legacy deployment variables.
const gardenDefaults = {
  dgShowFileTree: true,
  dgShowLocalGraph: true,
};

module.exports = {
  navigationOrder: {
    "/": ["_System", "System", "I Projects", "II Areas", "III Resources", "Keystones"],
  },
  eleventyComputed: {
    layout: (data) => {
      if (data.tags.indexOf("gardenEntry") != -1) {
        return "layouts/index.njk";
      }
      return "layouts/note.njk";
    },
    permalink: (data) => {
      if (data.tags.indexOf("gardenEntry") != -1) {
        return "/";
      }
      return data.permalink || undefined;
    },
    basesNotes: (data) => {
      if (!data.collections || !data.collections.note) return [];
      return data.collections.note.map((item) => ({
        path: item.filePathStem.replace("/notes/", ""),
        url: item.url,
        metadata: pickNoteMetadata(item.data),
        fileSlug: item.fileSlug,
      }));
    },
    settings: (data) => {
      const noteSettings = {};
      allSettings.forEach((setting) => {
        let noteSetting = data[setting];
        let globalSetting = process.env[setting];

        let settingValue;
        if (typeof noteSetting === "boolean") {
          settingValue = noteSetting;
        } else if (gardenDefaults[setting] === true) {
          settingValue = true;
        } else if (globalSetting !== undefined) {
          settingValue = globalSetting === "true";
        } else {
          settingValue = false;
        }
        noteSettings[setting] = settingValue;
      });
      return noteSettings;
    },
  },
};
