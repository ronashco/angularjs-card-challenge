
// Service using LocalStorage to save local data
cardsApp.service('storageService', function() {

  // Get data from localStorage
  function get(label) {

    if (!label) throw new Error('Label required, get, storage')

    return angular.fromJson(localStorage.getItem(label))

  }

  // Set data to localStorage
  function set(label, newData) {

    if (!label) throw new Error('Label required, set, storage')

    localStorage.setItem(label, angular.toJson(newData))

  }

  // Remove data from localStorage
  function remove(label) {


    if (!label) throw new Error('Label required, remove, storage')

    localStorage.removeItem(label)

  }

  return {
    get: get,
    set: set,
    remove: remove
  }

})
