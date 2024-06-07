// @ts-check
export const BreedsSelect = (props) => {

  function handleSubmit(event) {
    event.preventDefault();
    props.onFormSubmit(props.selectedBreed);
  }

  return (
    <>
      <div className="breed">
        <form>
          <div>
            <div className="breed-wrapper">
              <select className="breed-select" name="breed" value={props.selectedBreed} onChange={ e => props.setSelectedBreed( e.target.value ) }  >
                {props.breeds.map(breed => (
                    <option key={breed} value={breed}>{breed}</option>
                ))}
              </select>
              <div className="breed-control">
                <button onClick={handleSubmit} className="button is-dark">
                  表示
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="columns is-vcentered is-multiline">
          {props.urls?.map((url) => {
            return (
              <div key={url} className="column is-3">
                <img src={url} />
              </div>
            );
          })}
        </div>
      </div>

    </>
);
}

export default BreedsSelect
