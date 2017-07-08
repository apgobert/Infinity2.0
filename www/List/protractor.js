var objects = element.all(by.repeater('object in objects'));

it('should render initial data set', function() {
    expect(objects.count()).toBe(10);
    expect(objects.get(0).getText()).toEqual('[1] car');
    expect(objects.get(1).getText()).toEqual('[2] plane');
    expect(objects.last().getText()).toEqual('[10] window');
    expect(element(by.binding('objects.length')).getText())
        .toMatch('Enter the object of your choice :');
});

it('should update repeater when filter predicate changes', function() {
    expect(objects.count()).toBe(10);

    element(by.model('q')).sendKeys('ma');

    expect(objects.count()).toBe(2);
    expect(objects.get(0).getText()).toEqual('[1] computer');
    expect(objects.last().getText()).toEqual('[2] window');
});