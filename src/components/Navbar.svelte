<script>
  import IconButton from './common/IconButton.svelte'
  import QuestionIcon from './common/QuestionIcon.svelte'
  import InfoDialog from './InfoDialog.svelte'

  let open = false
</script>

<div class="flex flex-row place-items-center justify-center p-6">
  <div class="grow" />
  <h1 class="grow-0 font-serif text-2xl font-medium">quiphaus</h1>
  <div class="grow">
    <IconButton
      icon={QuestionIcon}
      on:click={() => {
        open = true
      }}
    />
  </div>
</div>
<InfoDialog bind:open />
