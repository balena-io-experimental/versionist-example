module.exports = {

  editChangelog: true,
  editVersion: false,

  addEntryToChangelog: {
    preset: 'prepend',
    fromLine: 5
  },

  transformTemplateData: (data) => {
    data.features = data.commits.filter((commit) => {
      return commit.subject.startsWith('feat:');
    }).map((commit) => {
      return commit.subject.slice(6);
    });

    data.fixes = data.commits.filter((commit) => {
      return commit.subject.startsWith('fix:');
    }).map((commit) => {
      return commit.subject.slice(5);
    });

    return data;
  },

  template: [
    '## v{{version}} - {{moment date "Y-MM-DD"}}',
    '{{#if features.length}}',
    '',
    '### Features',
    '',
    '{{#each features}}',
    '- {{capitalize this}}',
    '{{/each}}',
    '{{/if}}',
    '{{#if fixes.length}}',
    '',
    '### Fixes',
    '',
    '{{#each fixes}}',
    '- {{capitalize this}}',
    '{{/each}}',
    '{{/if}}'
  ].join('\n')

};
