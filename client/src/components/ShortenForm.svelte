<script>
  import ResultField from './ResultField.svelte';

  let longUrl = '';
  let shortUrl = '';

  const shortenUrl = async () => {
    if (longUrl === '') return;

    const url = `http://localhost:3000/api/v1/url/shorten`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ longUrl })
    });

    const data = await res.json();

    if (data.error) {
      shortUrl = data.error;
      return;
    }

    shortUrl = data.data.shortUrl;
    longUrl = '';
  };
</script>

<style>
  form {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(75vh - 60px);
  }

  .form-group-container {
    display: grid;
    grid-template-columns: 5fr 1fr;
    grid-gap: 1rem;
  }

  .form-group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 100%;
  }

  .form-field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid var(--secondary);
    outline: 0;
    font-size: 1.3rem;
    color: #ffffff;
    padding: 8px 0;
    background: transparent;
    transition: border-color 0.2s;
  }

  .form-field::placeholder {
    color: transparent;
  }

  .form-field:placeholder-shown ~ .form-label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  .form-label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: var(--secondary);
  }

  .form-field:focus ~ .form-label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #ffffff;
  }
  .form-field:focus {
    padding-bottom: 8px;
    border-width: 2px;
    border-image: linear-gradient(to right, var(--accent), var(--accent));
    border-image-slice: 1;
  }

  /* BTN */
  .uppercase {
    text-transform: uppercase;
  }

  .btn {
    display: inline-block;
    background: transparent;
    color: inherit;
    font: inherit;
    border: 0;
    outline: 0;
    padding: 0;
    transition: all 200ms ease-in;
    cursor: pointer;
    margin-top: 25px;
  }
  .btn-primary {
    background: var(--accent);
    color: #ffffff;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    padding: 0px 26px;
    font-weight: 500;
  }
  .btn:hover {
    background: var(--secondary);
  }

  .btn:active {
    background: var(--accent);
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
  }
  .btn:disabled {
    background: var(--secondary);
  }
</style>

<form on:submit|preventDefault={shortenUrl}>

  <div class="form-group-container">
    <div class="form-group">
      <input
        type="text"
        id="longUrl"
        name="longUrl"
        bind:value={longUrl}
        placeholder="http://example.com/..."
        class="form-field" />
      <label for="longUrl" class="form-label">Enter a long Url :</label>
    </div>

    <button
      type="button"
      on:click={shortenUrl}
      disabled={longUrl === ''}
      class="btn btn-primary uppercase">
      shorten
    </button>
  </div>

  <ResultField {shortUrl} />
</form>
