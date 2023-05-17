<script>
  import { user } from "$lib/stores.js"
</script>

<header class="navbar">
  <section class="navbar-section">
    <a href="/">
      <img src="favicon.png" alt="logo" class="logo"/>
    </a>
  </section>
  <section class="navbar-section">
    <nav>
      <a class="btn btn-link" href="/design">Design</a>
      <a class="btn btn-link" href="/about">About</a>
      <a class="btn btn-link" href="/register">Register</a>
    </nav>
  </section>
      <!--
  <span>Welcome {user.username}</span>
  <a href="cart"> Cart
      -->
</header>

<style>
  section{
    height: 100%;
  }
  header.navbar{
    background: var(--color-primary);
  }
  header.navbar section{
    height: 100%;
  }
  img.logo {
    height: 100%;
    height: 2em;
  }
  a {
    height: 100%;
    color: var(--color-light);
    &:hover {
      background: white;
    }
  }

</style>
