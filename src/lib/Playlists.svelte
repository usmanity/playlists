<script>
  import playlists from "../data/playlists.json";
  // imports playlist.css
  import "../styles/playlist.css";

  const handleClick = (e, playlist) => {
    location = playlist.link;
  };

  const handleNothing = (e) => {
    console.log(e);
  };
</script>

<grid>
  {#each playlists as playlist}
    <card
      class="playlist-card"
      on:click={(e) => {
        handleClick(e, playlist);
      }}
      on:keypress={handleNothing}
    >
      <flex>
        <left>
          <img src={playlist.image} alt={playlist.name} />
        </left>
        <right
          ><h2>{playlist.name}</h2>
          <p class="description">{playlist.description}</p></right
        >
      </flex>
    </card>
  {/each}
</grid>
