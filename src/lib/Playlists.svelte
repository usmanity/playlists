<script>
  import playlists from "../data/playlists.json";
  // imports playlist.css
  import "../styles/playlist.css";
</script>

<grid>
  {#each playlists as playlist}
    <card>{playlist.name}</card>
  {/each}
</grid>
