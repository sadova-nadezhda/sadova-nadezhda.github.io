<section class="content-header">
	<div class="container-fluid">
		<div class="row mb-2">
			<div class="col-sm-6">
				<h1>Редактирование</h1>
			</div>
		</div>
	</div><!-- /.container-fluid -->
</section>

<?php echo $this->Form->create($data, ['type' => 'file', 'onsubmit' => 'submitForm()']); ?>
<!-- Main content -->
<section class="content">
	<div class="row">
		<div class="col-md-12">
			<div class="card card-primary">
				<div class="card-header">
					<h3 class="card-title">Данные</h3>
					<div class="card-tools">
						<a href="/admin/catalogs" type="button" class="btn btn-tool">
							<i class="fas fa-arrow-left"></i>
						</a>
					</div>
				</div>
				
				<div class="card-body">
					<div class="form-group">
						<label for="inputOrder">Приоритет</label>
						<?= $this->Form->number('item_order', array('id' => 'inputOrder', 'class' => 'form-control')); ?>
					</div>
				
					
					<div class="form-group">
						<label for="inputTitle">Описание</label>
						<?= $this->Form->textarea('title', array('id' => 'inputtitle', 'class' => 'form-control')); ?>
					</div>

					<div class="form-group">
						<label for="inputPrice">Цена</label>
						<?= $this->Form->text('price', array('id' => 'inputPrice', 'class' => 'form-control', 'required' )); ?>
					</div>

					<div class="form-group">
                        <label for="reviewimg">Картинка Каталога</label>
                        <?php if(!empty($data['img'])): ?>
                            <div class="model_info_img">
                                <div class="model_item_container">
                                    <div class="model_item">
                                        <img src="/img/catalogs/thumbs/<?=$data['img']?>">
                                    </div>
                                </div>
                            </div>
                        <?php endif ?>
                        <div class="input-group">
                            <div class="custom-file">
                                <?= $this->Form->input('img', array('class' => 'custom-file-input', 'id' => 'reviewimg', 'type' => 'file', 'accept' => 'image/jpeg, image/png, image/jpg, image/gif')); ?>
                                <label class="custom-file-label" for="reviewimg"></label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="reviewimg">Картинка Главной странице</label>
                        <?php if(!empty($data['images'])): ?>
                            <div class="model_info_img">
                                <div class="model_item_container">
                                    <div class="model_item">
                                        <img src="/img/catalogs/thumbs/<?=$data['images']?>">
                                    </div>
                                </div>
                            </div>
                        <?php endif ?>
                        <div class="input-group">
                            <div class="custom-file">
                                <?= $this->Form->input('images', array('class' => 'custom-file-input', 'id' => 'reviewimg', 'type' => 'file', 'accept' => 'image/jpeg, image/png, image/jpg, image/gif')); ?>
                                <label class="custom-file-label" for="reviewimg"></label>
                            </div>
                        </div>
                    </div>
					

					<div class="submit_row">
						<?php echo $this->Form->button('Сохранить', array('class' => 'btn btn-success')); ?>
				    </div>
				</div>
			</div>
		</div>
	</div>
</section>
<?php echo $this->Form->end(); ?>

<script type="text/javascript">
    CKEDITOR.replace( 'inputBody' );
</script>