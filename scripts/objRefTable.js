const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.Physics,
		C3.Plugins.Sprite,
		C3.Behaviors.Follow,
		C3.Behaviors.bound,
		C3.Plugins.Keyboard,
		C3.Plugins.Button,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Physics.Acts.CreateRevoluteJoint,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Physics.Acts.ApplyTorque,
		C3.Plugins.Sprite.Cnds.AngleWithin,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Физика: 0},
	{ТайловыйФон: 0},
	{СледоватьЗа: 0},
	{ОграничитьСценой: 0},
	{байкер: 0},
	{переднееКолесо: 0},
	{заднееколесо: 0},
	{Клавиатура: 0},
	{ТайловыйФон2: 0},
	{байкер2: 0},
	{колесо1: 0},
	{колесо2: 0},
	{Кнопка: 0},
	{Кнопка2: 0},
	{ТайловыйФон3: 0},
	{Кнопка3: 0},
	{Кнопка4: 0}
];

self.InstanceType = {
	ТайловыйФон: class extends self.ITiledBackgroundInstance {},
	байкер: class extends self.ISpriteInstance {},
	переднееКолесо: class extends self.ISpriteInstance {},
	заднееколесо: class extends self.ISpriteInstance {},
	Клавиатура: class extends self.IInstance {},
	ТайловыйФон2: class extends self.ITiledBackgroundInstance {},
	байкер2: class extends self.ISpriteInstance {},
	колесо1: class extends self.ISpriteInstance {},
	колесо2: class extends self.ISpriteInstance {},
	Кнопка: class extends self.IButtonInstance {},
	Кнопка2: class extends self.IButtonInstance {},
	ТайловыйФон3: class extends self.ITiledBackgroundInstance {},
	Кнопка3: class extends self.IButtonInstance {},
	Кнопка4: class extends self.IButtonInstance {}
}