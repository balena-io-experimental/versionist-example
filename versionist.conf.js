module.exports = {

  editChangelog: true,
  editVersion: false,

  addEntryToChangelog: 'prepend',

  template: [
    '## v{{version}} - {{moment date "Y-MM-DD"}}',
    '',
    '{{#each commits}}',
    '- {{capitalize this.subject}}',
    '{{/each}}'
  ].join('\n')

};
