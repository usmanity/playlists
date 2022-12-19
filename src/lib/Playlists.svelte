<script>
  import playlists from "../data/playlists.json";
  // imports playlist.css
  import "../styles/playlist.css";
</script>

<grid>
  {#each playlists as playlist}
    <card>
      <flex>
        <left>
          <img src={playlist.image} alt={playlist.name} />
        </left>
        <right
          ><h2>{playlist.name}</h2>
          <p>{playlist.description}</p></right
        >
      </flex>
    </card>
  {/each}
</grid>
