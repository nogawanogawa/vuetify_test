<template>
  <div class="frame">
    <iframe
      src="http://localhost:8088/#projector"
      frameborder="100"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}
frame {
  width: 100%;
  height: 100%;
  padding-top: 100;
  z-index: 1;
  overflow: hidden;
}

iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  margin-top: 0px;
  z-index: 0;
  padding-bottom: 40px;
}
</style>