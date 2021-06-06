class AjaxPromise {
  constructor(promise) {
    this.promise = promise;
  }

  done(cb) {
    this.promise = this.promise.then(data => {
      cb(data);
      return data;
    });
    return this;
  }

  fail(cb) {
    this.promise = this.promise.catch(cb);
    return this;
  }

  always(cb) {
    this.promise = this.promise.finally(cb);
    return this;
  }
}

export default AjaxPromise;