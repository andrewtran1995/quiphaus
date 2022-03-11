<script>
  import IconButton from '../common/IconButton.svelte'
  import QuestionIcon from '../common/QuestionIcon.svelte'
  import InfoDialog from './InfoDialog.svelte'
  import SettingsIcon from '../common/SettingsIcon.svelte'
  import Settings from './Settings.svelte'

  let infoOpen = false
  let settingsOpen = false
</script>

<div class="flex flex-row place-items-center justify-center p-6">
  <div class="grow">
    <IconButton
      icon={SettingsIcon}
      on:click={() => {
        settingsOpen = true
      }}
    />
  </div>
  <h1 class="grow-0 cursor-default font-serif text-3xl font-medium">
    quiphaus
  </h1>
  <div class="grow text-right">
    <IconButton
      icon={QuestionIcon}
      on:click={() => {
        infoOpen = true
      }}
    />
  </div>
</div>
<Settings bind:open={settingsOpen} />
<InfoDialog bind:open={infoOpen} />
